const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const username = document.querySelector("#name").value;

  const email = document.querySelector("#email").value;

  const phone = document.querySelector("#phone").value;

  if (username == "" || email == "" || phone == "") {
    alert("Please fill all the fields");
  } else {
    let data = {
      user_name: username,
      user_email: email,
      user_phone: phone,
    };
    console.log(data);
    let arr=[]
    arr.push(data)

    let m = localStorage.getItem("ary");
    if (m == null) {
      const jsonData = JSON.stringify(arr);
      localStorage.setItem("ary", jsonData);
    } else {
      let oldData = JSON.parse(localStorage.getItem("ary"));
      oldData.push(data);
      localStorage.setItem("ary", JSON.stringify(oldData));
      location.reload()
      
      
    }

    resetFunction();
  }

});

let parseArr = JSON.parse(localStorage.getItem("ary"))
console.log(parseArr)

parseArr.map((item,index) => {
  const tableData = document.querySelector("tbody");
  console.log(item);
  let row = document.createElement("tr");
  let rowData1 = document.createElement("td");
  let rowData2 = document.createElement("td");
  let rowData3 = document.createElement("td");
  let rowData4 = document.createElement("td");

  const deleteBtn = document.createElement("button");

  tableData.appendChild(row);
  row.appendChild(rowData1);
  row.appendChild(rowData2);
  row.appendChild(rowData3);
  row.appendChild(rowData4);
  rowData4.appendChild(deleteBtn);
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", (index) => {
  let new_ary  = JSON.parse(localStorage.getItem("ary"))
  new_ary.splice(index,1)
  console.log(new_ary)
  localStorage.setItem("ary",JSON.stringify(new_ary))
  location.reload()
  });


  rowData1.innerText = item.user_name;
  rowData2.innerText = item.user_email;
  rowData3.innerText = item.user_phone;
});

const resetFunction = () => {
  username.value = "";
  email.value = "";
  phone.value = "";
};
