import FP from '../fp'
import { ComponentProps } from '../../types'
import React from 'react'


export const Caption = ({ children, ...props }: ComponentProps) => {
  return (
    <FP as="caption" {...props}>
      {children}
    </FP>
  )
}

export const Thead = ({ children, ...props }: ComponentProps) => (
  <FP as="thead" {...props}>
    {children}
  </FP>
)

export const Tbody = ({ children, ...props }: ComponentProps) => (
  <FP as="tbody" {...props}>
    {children}
  </FP>
)

export const Tr = ({ children, ...props }: ComponentProps) => (
  <FP as="tr" {...props}>
    {children}
  </FP>
)

export const Td = ({ children, ...props }: ComponentProps) => (
  <FP as="td" {...props}>
    {children}
  </FP>
)

export const Table = ({ id, dataStyle, children, ...props }: ComponentProps) => {
  return (
    <FP
      as="section"
      id={id}
      {...props}
      data-style="table-wrapper"
    >
      <table>{children}</table>
    </FP>
  )
}

Table.displayName = 'Table'
Caption.displayName = 'Caption'
Thead.displayName = 'Thead'
Tbody.displayName = 'Tbody'
Tr.displayName = 'Tr'
Td.displayName = 'Td'

