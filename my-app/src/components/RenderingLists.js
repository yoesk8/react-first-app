import React from 'react'
import Book from './Book'

const RenderingLists = () => {
    const books = [{
            title: 'to kill a mockinbigrd',
            author: 'harger lee',
            pages: 203
        },
        {
            title: 'the hunger games',
            author: 'lee',
            pages: 300
        },
        {
            title: '1984',
            author: 'george orwell',
            pages: 400
        },
    ]
    const booklist = [
        'book one',
        'book two',
        'book three'
    ]
  return (
    <div>
        {books.map(book=>
            <Book book={book} />)}
    </div>
  )
}

export default RenderingLists