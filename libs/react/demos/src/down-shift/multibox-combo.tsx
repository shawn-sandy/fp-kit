import { useMultipleSelection, useCombobox } from 'downshift'
import React from 'react'

import { data } from './data'
import './index.css'

export type options = {
  displayName: string
  optionId: string
}

const { atsSelfReportOptions } = data

export const MultipleCombo = (options: options[] = atsSelfReportOptions) => {
  const { atsSelfReportOptions } = data
  const initialSelectedItems = [
    atsSelfReportOptions[0],
    atsSelfReportOptions[1],
  ]

  function getFilteredBooks(selectedItems: any, inputValue: string) {
    const lowerCasedInputValue = inputValue.toLowerCase()

    return atsSelfReportOptions.filter(function filterBook(ats) {
      // console.log({ selectedItems })

      return (
        !selectedItems.includes(ats) &&
        ats.displayName.toLowerCase().includes(lowerCasedInputValue)
      )
    })
  }

  function MultipleComboBox() {
    const [inputValue, setInputValue] = React.useState('')
    const [selectedItems, setSelectedItems] =
      React.useState(initialSelectedItems)
    const items = React.useMemo(
      () => getFilteredBooks(selectedItems, inputValue),
      [selectedItems, inputValue],
    )
    console.log({ items })

    const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
      useMultipleSelection({
        selectedItems,
        onStateChange({ selectedItems: newSelectedItems, type }) {
          switch (type) {
            case useMultipleSelection.stateChangeTypes
              .SelectedItemKeyDownBackspace:
            case useMultipleSelection.stateChangeTypes
              .SelectedItemKeyDownDelete:
            case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
            case useMultipleSelection.stateChangeTypes
              .FunctionRemoveSelectedItem:
              setSelectedItems(newSelectedItems as any)
              break
            default:
              break
          }
        },
      })
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      items,
      itemToString(item) {
        return item ? item.displayName : ''
      },
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      selectedItem: null,
      stateReducer(state, actionAndChanges) {
        const { changes, type } = actionAndChanges

        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: 0, // with the first option highlighted.
            }
          default:
            return changes
        }
      },
      onStateChange({
        inputValue: newInputValue,
        type,
        selectedItem: newSelectedItem,
      }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (newSelectedItem) {
              setSelectedItems([...selectedItems, newSelectedItem])
            }
            break

          case useCombobox.stateChangeTypes.InputChange: {
            setInputValue(inputValue)

            break
          }
          default:
            break
        }

        console.log({ newInputValue })
      },
    })

    return (
      <div className="w-[592px]">
        <div>
          <section
            style={{ textAlign: 'left', position: 'relative', width: '600px' }}
          >
            <label htmlFor="multiple-combo-box" {...getLabelProps()}>
              Pick some books:
            </label>
            <input
              id="multiple-combo-input"
              type="text"
              placeholder="Best book ever"
              className="w-full"
              {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            />{' '}
            <div
              style={{
                position: 'absolute',
                zIndex: '99',
                backgroundColor: '#fff',
                overflow: 'auto',
                left: '0',
                right: '0',
                border: '1px solid #ccc',
                maxHeight: '200px',
                overflowX: 'hidden',
                overflowY: 'auto',
              }}
            >
              <ul
                style={{ position: 'relative' }}
                data-variant="unstyled"
                // style={{ all: 'unset', overflow: 'auto' }}
                {...getMenuProps()}
              >
                {isOpen &&
                  items.map((item, index) => (
                    <li
                      key={`item-${index}`}
                      {...getItemProps({ item, index })}
                      className={highlightedIndex === index ? 'selected' : ''}
                    >
                      <span>{item.displayName}</span>
                      <span className="text-sm text-gray-700">
                        {item.displayName}
                      </span>
                    </li>
                  ))}
                {console.log({ items })}
              </ul>
            </div>
          </section>
        </div>
        <div>
          {selectedItems.map(function renderSelectedItem(
            selectedItemForRender,
            index,
          ) {
            return (
              <span
                role="note"
                key={`selected-item-${index}`}
                {...getSelectedItemProps({
                  selectedItem: selectedItemForRender,
                  index,
                })}
              >
                {selectedItemForRender.displayName}
                <button
                  style={{
                    all: 'unset',
                    paddingInline: '0.5rem',
                    display: 'inline-block',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    removeSelectedItem(selectedItemForRender)
                  }}
                >
                  &#10005;
                </button>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
  return <MultipleComboBox />
}
