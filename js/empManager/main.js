
const empList = new ListEmployee();
const validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function showTable(arr) {
    var content = "";
    arr.map(function (emp) {

        var trELE = `<tr>
            <td>${emp.acc}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.workDay}</td>
            <td>${emp.position}</td>
            <td>${emp.sumSal}</td>
            <td>${emp.kind}</td>
            <td>
                <button onclick="deleteEmp('${emp.acc}')" class="btn btn-danger"  >Xóa</button>
                <button onclick="detail('${emp.acc}')" class="btn btn-info" data-toggle="modal" data-target="#myModal">Xem</button>
            </td>
        </tr>`
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}


function setLocalStorage(arr) {
    localStorage.setItem("empList", JSON.stringify(arr));

}

function getLocalStorage() {
    if (localStorage.getItem("empList") != null) {
        empList.empArr = JSON.parse(localStorage.getItem("empList"));
        showTable(empList.empArr);
    }
}
getLocalStorage();

function able() {
    getELE("tknv").disabled = false;
}

function addNewEmp() {
    var acc = getELE("tknv").value;
    var name = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var workDay = getELE("datepicker").value;
    var salary = getELE("luongCB").value;
    var position = getELE("chucvu").value;
    var workHours = getELE("gioLam").value;

    //TODO: Validation
    var isValid = true; 
 
    isValid &= validation.checkEmpty(acc, "tbTKNV", "Tài khoản không được để trống") && validation.checkID(acc, "tbTKNV", "Tài khoản không được trùng", empList.empArr) && validation.checkAcc(acc, "tbTKNV", "Tài khoản phải có 4-6 ký tự");
    isValid &= validation.checkEmpty(name, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(name, "tbTen", "Tên nhân viên phải là chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPass(password, "tbMatKhau", "Mật khẩu phải chứa 6-10 ký tự, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkSal(salary, "tbLuongCB", "Lương cơ bản 1.000.000 - 20.000.000");
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chưa chọn chức vụ");
    isValid &= validation.checkEmpty(workHours, "tbGiolam", "Giờ làm không được để trống") && validation.checkHours(workHours, "tbGiolam", "Giờ làm phải từ 80-200");

    if (isValid) {
        var emp = new Employee(acc,name,email,password,workDay,Number(salary),position,Number(workHours));
        emp.sumSalary();
        emp.empKind();
        empList.addEmp(emp);
        showTable(empList.empArr);
        setLocalStorage(empList.empArr);
    }

}

function deleteEmp(id) {
    empList.delEmp(id);
    setLocalStorage(empList.empArr);
    getLocalStorage()

}

function detail(id) {
    var index = empList.findIndexEmp(id);
    if (index != -1) {
        console.log(empList.empArr[index]);
        getELE("tknv").value = empList.empArr[index].acc;
        getELE("tknv").disabled = true;
        getELE("name").value = empList.empArr[index].name;
        getELE("email").value = empList.empArr[index].email;
        getELE("password").value = empList.empArr[index].password;
        getELE("datepicker").value = empList.empArr[index].workDay;
        getELE("luongCB").value = empList.empArr[index].salary;
        getELE("chucvu").value = empList.empArr[index].position;
        getELE("gioLam").value = empList.empArr[index].workHours;
    }
       setLocalStorage(empList.empArr);
       getLocalStorage()

}

function update() {
    var acc = getELE("tknv").value;
    var name = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var workDay = getELE("datepicker").value;
    var salary = getELE("luongCB").value;
    var position = getELE("chucvu").value;
    var workHours = getELE("gioLam").value;

    var isValid = true; 
 
    isValid &= validation.checkEmpty(name, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(name, "tbTen", "Tên nhân viên phải là chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPass(password, "tbMatKhau", "Mật khẩu phải chứa 6-10 ký tự, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkSal(salary, "tbLuongCB", "Lương cơ bản 1.000.000 - 20.000.000");
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chưa chọn chức vụ");
    isValid &= validation.checkEmpty(workHours, "tbGiolam", "Giờ làm không được để trống") && validation.checkHours(workHours, "tbGiolam", "Giờ làm phải từ 80-200");

    
    if (isValid) {
        var emp = new Employee(acc,name,email,password,workDay,Number(salary),position,Number(workHours));
        emp.sumSalary();
        emp.empKind();
        empList.updateEmp(emp);
    
        setLocalStorage(empList.empArr);
        getLocalStorage();
    }
  
}

function search() {
    var keyword = getELE("searchName").value;
    var mangKQ = empList.searchName(keyword);
    showTable(mangKQ);
}

getELE("btnTimNV").onclick = search;

getELE("searchName").onkeyup = function () {
    var keyword = getELE("searchName").value;
    var mangKQ = empList.searchName(keyword);
    showTable(mangKQ);
};