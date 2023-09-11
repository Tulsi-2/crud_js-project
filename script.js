const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const name = document.querySelector('#name').value

    const email = document.querySelector('#email').value

    const phone = document.querySelector('#phone').value

    let data = {
        user_name  : name,
        user_email : email,
        user_phone  : phone

    }
    console.log(data)

    let arr = []
    arr.push(data)
    console.log(arr)

    arr.map((item)=>{
        const tableData = document.querySelector('tbody')
        console.log(item)
        let row = document.createElement('tr')
        let rowData1 = document.createElement('td')
        let rowData2 = document.createElement('td')
        let rowData3 = document.createElement('td')
        let rowData4 = document.createElement('td')

        const deleteBtn = document.createElement('button')

        tableData.appendChild(row)
        row.appendChild(rowData1)
        row.appendChild(rowData2)
        row.appendChild(rowData3)
        row.appendChild(rowData4)
        rowData4.appendChild(deleteBtn)
        deleteBtn.innerText = "Delete"

        deleteBtn.addEventListener('click',()=>{
            row.remove()
        })

        rowData1.innerText = item.user_name
        rowData2.innerText = item.user_email
        rowData3.innerText = item.user_phone

    })

    // let tableData = document.querySelector('tbody')

    // let newRow = document.createElement('tr')
    // let newData1 = document.createElement('td')
    // let newData2 = document.createElement('td')
    // let newData3 = document.createElement('td')

    // tableData.appendChild(newRow)

    // newRow.appendChild(newData1)
    // newRow.appendChild(newData2)
    // newRow.appendChild(newData3)

    // newData1.innerText = name
    // newData2.innerText = email
    // newData3.innerText =phone

})



