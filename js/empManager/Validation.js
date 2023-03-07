function Validation() {
    this.checkEmpty = function (valueInput, spanId, message) {
        if (valueInput == "") {
            //! không hợp lệ
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;

            return false;
        }
        //hợp lệ
        document.getElementById(spanId).style.display = "none";
        document.getElementById(spanId).innerHTML = "";
        return true;
    }

    this.checkID = function (valueInput, spanId, message, empArr) {
        var isExsist = false;
        isExsist = empArr.some(function (emp) {
            return valueInput === emp.acc
        })

        if (isExsist) {
            //! Đã tồn tại => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;

            return false;
        } else {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        }
    }

    this.checkAcc = function (valueInput, spanId, message) {

        if (valueInput.length >= 4 && valueInput.length <= 6) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkName = function (valueInput, spanId, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkEmail = function (valueInput, spanId, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // var patternRegexp = new RegExp(patternString);
        //test(), match()
        if (valueInput.match(patternString)) {
            //Hợp lệ

            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {

            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkPass = function (valueInput, spanId, message) {
        var patternString = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (valueInput.match(patternString)) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkSal = function (valueInput, spanId, message) {

        if (valueInput >= 1000000 && valueInput <= 20000000) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkSelect = function (selectID, spanId, message) {
        var indexOption = document.getElementById(selectID).selectedIndex;

        if (indexOption != 0) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }

    this.checkHours = function (valueInput, spanId, message) {
        var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;

        if (valueInput >= 80 && valueInput <= 200) {
            //Hợp lệ
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;

        } else {
            //! => không hợp lệ 
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;

        }

    }
}