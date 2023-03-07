function Employee(acc,name,email,pass,workDay,salary,position,workHours) {
    this.acc = acc;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.workDay = workDay;
    this.salary = salary;
    this.position = position;
    this.workHours = workHours;
    this.sumSal = 0;
    this.kind = '';

    this.sumSalary = function(){
        if(this.position == "Sếp"){
            this.sumSal = this.salary * 3
        } else if (this.position == "Trưởng phòng"){
            this.sumSal = this.salary * 2
        } else {
            this.sumSal = this.salary 
        }
    }

    this.empKind = function(){
        if(this.workHours < 160){
            this.kind = 'Trung bình'
        } else if (this.workHours >= 160 && this.workHours < 176){
            this.kind = 'Khá'
        } else if (this.workHours >= 176 && this.workHours < 192) {
            this.kind = 'Giỏi'
        } else {
            this.kind = 'Xuất sắc'
        }
    }
    
}