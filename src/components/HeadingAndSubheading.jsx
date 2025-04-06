import React from 'react'

function HeadingAndSubheading(prop) {
  return (
    <>
    <h1  className="text-4xl font-bold text-gray-800 dark:text-Black dark:text-white p-4 bg-lime-300 ">
        {prop.heading}
    </h1>
    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        {prop.subheading}
    </p>
    </>
  )
}

export default HeadingAndSubheading