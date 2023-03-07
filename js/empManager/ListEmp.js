function ListEmployee() {
    //thuộc tính
    this.empArr = [];

    //phương thức
    this.addEmp = function(emp){
        this.empArr.push(emp);
    }

    this.findIndexEmp = function(id){
        var indexFind = -1;
        indexFind = this.empArr.findIndex(function(emp){
            return emp.acc == id;
        })
        return indexFind;
    }

    this.delEmp = function(id){
       var index = this.findIndexEmp(id);
        if(index != -1){
            this.empArr.splice(index, 1);
        }
    }

    this.updateEmp = function(emp){
        var index = this.findIndexEmp(emp.acc);
        if(index != -1){
            this.empArr[index] = emp;
        }
    }
}

ListEmployee.prototype.searchName = function (keyword) {
    var resArr = [];
    var keywordLowerCase = keyword.toLowerCase();
    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    this.empArr.map(function (emp) {
        var nameLowerCase = emp.kind.toLowerCase().replace(/\s/g, "");

        if(nameLowerCase.indexOf(keywordLowerCase) > -1){
            resArr.push(emp);

        }
    })

    return resArr;
}