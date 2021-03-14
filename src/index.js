import React from 'react'

const Renderer = ({ sections=[], sectionMap={}, key }) => {
  return sections.map((section, index) => {
    const Component = SECTION_MAP[section[key]]
    return (
      <Component
        key={index}
        id={section.id}
        {...section}
        fallback={getFallback(section.id)}
      />
    )
  })
}

const getFallback = (id) => {
  if (typeof window === 'undefined') return null
  const element = window.document.getElementById(id)
  return element ? <section key={id} id={id} dangerouslySetInnerHTML={{ __html: element.innerHTML }}/> : null
}

export default Renderer
