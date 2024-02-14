let ulElem = document.querySelector('ul')

function addNewLi () {
    // console.log('click')
    let newLiTag = document.createElement('li')
    newLiTag.innerHTML = 'Blogs'

    let secondLiTag = document.createElement('li')
    secondLiTag.innerHTML = 'Users'

    // ulElem.append('Blogs')
    // ulElem.appendChild('Blogs')

    // ulElem.append(newLiTag , secondLiTag)
    // ulElem.appendChild(newLiTag , secondLiTag)

    // let appendResult = ulElem.append(newLiTag)
    let appendResult = ulElem.appendChild(newLiTag)

    console.log(appendResult)
}