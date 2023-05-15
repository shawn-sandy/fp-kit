import { useMultipleSelection, useSelect, useCombobox } from 'downshift'
import React from 'react'
export function MultipleSelectExample() {
  const books = [
    { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
    { author: 'Lev Tolstoy', title: 'War and Peace' },
    { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
    { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
    { author: 'George Orwell', title: '1984' },
    { author: 'Jane Austen', title: 'Pride and Prejudice' },
    { author: 'Marcus Aurelius', title: 'Meditations' },
    { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
    { author: 'Lev Tolstoy', title: 'Anna Karenina' },
    { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
  ]
  function getBooksFilter(selectedItems) {
    return function booksFilter(book) {
      return selectedItems.indexOf(book) < 0
    }
  }

  function MultipleSelect() {
    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems,
    } = useMultipleSelection({ initialSelectedItems: [books[0], books[1]] })
    const items = books.filter(getBooksFilter(selectedItems))
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      selectedItem: null,
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      items,
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: 0, // with the first option highlighted.
            }
        }
        return changes
      },
      onStateChange: ({ type, selectedItem: newSelectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
          case useSelect.stateChangeTypes.ToggleButtonBlur:
            if (newSelectedItem) {
              addSelectedItem(newSelectedItem)
            }
            break
          default:
            break
        }
      },
    })

    return (
      <div className="w-[592px]">
        <div className="flex flex-col gap-1">
          <label className="w-fit" {...getLabelProps()}>
            Pick some books:
          </label>
          <div className="shadow-sm bg-white inline-flex gap-2 items-center flex-wrap p-1.5 border-2 focus-within:border-gray-400">
            {selectedItems.map(function renderSelectedItem(
              selectedItemForRender,
              index,
            ) {
              return (
                <span
                  className="bg-gray-100 rounded-md px-1 focus:bg-red-400"
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({
                    selectedItem: selectedItemForRender,
                    index,
                  })}
                >
                  {selectedItemForRender.title}
                  <span
                    className="px-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeSelectedItem(selectedItemForRender)
                    }}
                  >
                    &#10005;
                  </span>
                </span>
              )
            })}
            <div
              className="px-2 py-1 outline-2 outline-gray-400 cursor-pointer focus:bg-gray-200"
              {...getToggleButtonProps(
                getDropdownProps({ preventKeyAction: isOpen }),
              )}
            >
              Pick some books &#8595;
            </div>
          </div>
        </div>
        <ul
          data-variant="unstyled"
          className={`absolute w-inherit bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${
            !(isOpen && items.length) && 'hidden'
          }`}
          {...getMenuProps()}
        >
          <hr />
          {/* Add dropdown list list */}
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.title}</span>
                <span className="text-sm text-gray-700">{item.author}</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }
  return <MultipleSelect />
}

export function ComboBoxExample() {
  const books = [
    { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
    { author: 'Lev Tolstoy', title: 'War and Peace' },
    { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
    { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
    { author: 'George Orwell', title: '1984' },
    { author: 'Jane Austen', title: 'Pride and Prejudice' },
    { author: 'Marcus Aurelius', title: 'Meditations' },
    { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
    { author: 'Lev Tolstoy', title: 'Anna Karenina' },
    { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
  ]
  function getBooksFilter(inputValue) {
    const lowerCasedInputValue = inputValue.toLowerCase()

    return function booksFilter(book) {
      return (
        !inputValue ||
        book.title.toLowerCase().includes(lowerCasedInputValue) ||
        book.author.toLowerCase().includes(lowerCasedInputValue)
      )
    }
  }

  function ComboBox() {
    const [items, setItems] = React.useState(books)
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
      onInputValueChange({ inputValue }) {
        setItems(books.filter(getBooksFilter(inputValue)))
      },
      items,
      itemToString(item) {
        return item ? item.title : ''
      },
    })

    return (
      <div>
        <div className="w-72 flex flex-col gap-1">
          <label className="w-fit" {...getLabelProps()}>
            Choose your favorite book:
          </label>
          <div className="flex shadow-sm bg-white gap-0.5">
            <input
              placeholder="Best book ever"
              className="w-full p-1.5"
              {...getInputProps()}
            />
            <button
              aria-label="toggle menu"
              className="px-2"
              type="button"
              {...getToggleButtonProps()}
            >
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
        </div>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${
            !(isOpen && items.length) && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.title}</span>
                <span className="text-sm text-gray-700">{item.author}</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }
  return <ComboBox />
}
