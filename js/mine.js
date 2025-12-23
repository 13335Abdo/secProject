var mainB = document.getElementById("openModal")
var importantButton = document.getElementById("save")
var overLay = document.querySelector(".overlay")
var cancel = document.querySelectorAll(".cancels")
var userimgInput = document.getElementById("photoInput")
var userNameInput = document.getElementById("namee");
var userPassInput = document.getElementById("pass");
var userEmailInput = document.getElementById("email");
var userAddressInput = document.getElementById("address");
var userNoteInput = document.getElementById("note");
var userGroubInput = document.getElementById("groub");
var userCheckInput = document.getElementById("check");
var userCheck2Input = document.getElementById("checkk");
var userSearch = document.getElementById("search");
var allThing = []
var halfThing = []
var half2Thing= []
var y = -1


if (localStorage.getItem("contect1")) {
    halfThing = JSON.parse(localStorage.getItem("contect1"))


    display2()

}
if (localStorage.getItem("contect2")) {
    half2Thing = JSON.parse(localStorage.getItem("contect2"))


    display3()

}
if (localStorage.getItem("contect")) {
    allThing = JSON.parse(localStorage.getItem("contect"))


    display()

}


addd = function add() {

    // ✅ فحص: هل رقم التليفون موجود قبل كده
    for (var i = 0; i < allThing.length; i++) {
        if (allThing[i].phone == userPassInput.value) {
            swal(); // رقم مكرر
            return false; // نوقف الإضافة
        }
    }

    var imgName = userimgInput.files[0].name
    var imgPath = "images/" + imgName

    allThing.push({
        id: Date.now(),
        namee: userNameInput.value,
        phone: userPassInput.value,
        email: userEmailInput.value,
        address: userAddressInput.value,
        note: userNoteInput.value,
        group: userGroubInput.value,
        img: imgPath
    })

    localStorage.setItem("contect", JSON.stringify(allThing))
    display()
    clear()
    return true; // ✅ نجاح
}



function display() {
    var cartona = ""
    for (var i = 0; i < allThing.length; i++) {
        cartona += design(i)
    }
    document.getElementById("contactsContainer").innerHTML = cartona
    w()
    wwww()
}






mainB.addEventListener("click", function () {
    overLay.style.cssText = "display:flex;"
})

for (var i = 0; i <= 1; i++) {
    cancel[i].addEventListener("click", function () {
        overLay.style.cssText = "display:none;"
    })
}

var regix1 = /^[A-Za-z ]{2,}$/;
var userNameInput = document.getElementById("namee");

userNameInput.addEventListener("input", function () {

    if (regix1.test(userNameInput.value)) {
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
    } else {
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
    }

});





var regix2 = /^(002)?(01)[0125][0-9]{8}$/;
var userPassInput = document.getElementById("pass");

userPassInput.addEventListener("input", function () {

    if (regix2.test(userPassInput.value)) {
        userPassInput.classList.add("is-valid");
        userPassInput.classList.remove("is-invalid");
    } else {
        userPassInput.classList.add("is-invalid");
        userPassInput.classList.remove("is-valid");
    }

});


var regix3 = /^[A-Za-z0-9]+[@][\w]+[.][A-Za-z0-9]{2,}$/
var userEmailInput = document.getElementById("email");

userEmailInput.addEventListener("input", function () {

    if (regix3.test(userEmailInput.value)) {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
    } else {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
    }

});

function succes() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}

function swal() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}


importantButton.addEventListener("click", function () {

    if (
        userNameInput.value &&
        userPassInput.value &&
        userEmailInput.value &&
        regix1.test(userNameInput.value) &&
        regix2.test(userPassInput.value) &&
        regix3.test(userEmailInput.value)
    ) {

        let result;

        if (y === -1) {
            result = addd();   // 👈 نمسك النتيجة
        } else {
            update();
            result = true;
        }

        if (result) {          // 👈 success بس لو فعلاً اتضاف
            overLay.style.display = "none";
            succes();
            clear();
        }

    } else {
        swal();
    }
});




function clear() {
    userNameInput.value = null
    userPassInput.value = null
    userEmailInput.value = null
    userNoteInput.value = null
    userAddressInput.value = null
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.remove("is-invalid")
    userPassInput.classList.remove("is-valid");
    userPassInput.classList.remove("is-invalid")
    userNameInput.classList.remove("is-valid");
    userNameInput.classList.remove("is-invalid")
    userCheckInput.checked = false ;
    userCheck2Input.checked = false ;
    y = -1
}


function design2(v) {
    return `

    <div class="mini-card">
  <div class="left">
    <div class="mini-avatar"> <img class="mini-avatar" src="${halfThing[v].img}" alt=""></div>

    <div class="mini-info">
      <h6>${halfThing[v].namee}</h6>
      <span>${halfThing[v].phone}</span>
    </div>
  </div>

  <div class="call-btn">
    <i class="fa-solid fa-phone"></i>
  </div>
</div>`
}

function design3(v) {
    return `

    <div class="mini-card">
  <div class="left">
    <div class="mini-avatar"> <img class="mini-avatar" src="${half2Thing[v].img}" alt=""></div>

    <div class="mini-info">
      <h6>${half2Thing[v].namee}</h6>
      <span>${half2Thing[v].phone}</span>
    </div>
  </div>

  <div class="call-btn">
    <i class="fa-solid fa-phone"></i>
  </div>
</div>`
}

function design(i) {
    return `<div class="contact-card">

  <!-- top -->
  <div class="top">
    <div class="avatar">
      <img src="${allThing[i].img}" alt="">
    </div>

    <div class="info">
      <h5>${allThing[i].namee}</h5>

      <div class="row-line">
        <i class="fa-solid fa-phone"></i>
        <span>${allThing[i].phone}</span>
      </div>

      <div class="row-line">
        <i class="fa-solid fa-envelope"></i>
        <span>${allThing[i].email}</span>
      </div>

      <div class="row-line">
        <i class="fa-solid fa-location-dot"></i>
        <span>${allThing[i].address}</span>
      </div>

      <span class="tag">${allThing[i].group}</span>
    </div>
  </div>

  <hr>

  <!-- bottom -->
  <div class="bottom">
    <div class="actions-left">
      <i class="fa-solid fa-phone"></i>
      <i class="fa-solid fa-envelope"></i>
    </div>

    <div class="actions-right">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-heart"></i>
      <i onclick="fill(${i})" class="fa-solid fa-pen"></i>
      <i onclick="deleteItem(${i})" class="fa-solid fa-trash"></i>
    </div>
  </div>

</div>
`
}



userSearch.addEventListener("input", function () {
    search()
})

function search() {
    var match = "";
    for (var x = 0; x < allThing.length; x++) {
        if (allThing[x].namee.toLowerCase().includes(userSearch.value.toLowerCase())) {
            match += design(x)
        }
    }
    document.getElementById("contactsContainer").innerHTML = match
}

function deleteItem(x) {

    // ✅ حل جديد: الاعتماد على رقم الموبايل
    var deletedPhone = allThing[x].phone;

    // مسح من القائمة الأساسية
    allThing.splice(x, 1);

    // مسح من fav بنفس رقم الموبايل
    halfThing = halfThing.filter(item => item.phone !== deletedPhone);

    // مسح من ams بنفس رقم الموبايل
    half2Thing = half2Thing.filter(item => item.phone !== deletedPhone);

    // حفظ
    localStorage.setItem("contect", JSON.stringify(allThing));
    localStorage.setItem("contect1", JSON.stringify(halfThing));
    localStorage.setItem("contect2", JSON.stringify(half2Thing));

    // إعادة العرض
    display();
    display2();
    display3();
}



function fill(z) {
    y = z
    overLay.style.cssText = "display:flex;"
    userNameInput.value = allThing[z].namee
    userPassInput.value = allThing[z].phone
    userEmailInput.value = allThing[z].email
    userAddressInput.value = allThing[z].address
    userNoteInput.value = allThing[z].note


}

function update() {
    allThing[y].namee = userNameInput.value
    allThing[y].phone = userPassInput.value
    allThing[y].email = userEmailInput.value
    allThing[y].address = userAddressInput.value
    allThing[y].note = userNoteInput.value
    overLay.style.cssText = "display:none;"
    display()
    localStorage.setItem("contact", JSON.stringify(allThing))
    clear()
    y = -1

}

userCheckInput.addEventListener("change", function () {
    if (this.checked) {
        addd2();
    }
});



addd2 = function add2() {
    for (var i = 0; i < halfThing.length; i++) {
        if (halfThing[i].phone == userPassInput.value) {
            swal(); // رقم مكرر
            return; // نوقف الإضافة
        }
    }

    var imgName = userimgInput.files[0].name
    var imgPath = "images/" + imgName

    halfThing.push({

        namee: userNameInput.value,
        phone: userPassInput.value,
        img: imgPath
    })

    localStorage.setItem("contect1", JSON.stringify(halfThing))
    display2()
}



function display2() {
    var cartona2 = ""
    for (var i = 0; i < halfThing.length; i++) {
        cartona2 += design2(i)
    }
    document.getElementById("favorate").innerHTML = cartona2
    ww()
}



userCheck2Input.addEventListener("change", function () {
    if (this.checked) {
        addd3();
    }
});



addd3 = function add3() {

    for (var i = 0; i < half2Thing.length; i++) {
        if (half2Thing[i].phone == userPassInput.value) {
            swal(); // رقم مكرر
            return; // نوقف الإضافة
        }
    }
    var imgName = userimgInput.files[0].name

    var imgPath = "images/" + imgName
    half2Thing.push(
        {
            namee: userNameInput.value,
            phone: userPassInput.value,
            img: imgPath
        }
    )
    
    localStorage.setItem("contect2", JSON.stringify(half2Thing))
    display3()

}


function display3() {
    var cartona3 = ""
    for (var i = 0; i < half2Thing.length; i++) {
        cartona3 += design3(i)
    }
    document.getElementById("emergency").innerHTML = cartona3
    www()
}




function w()
{
    
document.getElementById("total").innerHTML=allThing.length
}

function ww()
{
    
document.getElementById("fav").innerHTML=halfThing.length
}

function www()
{
    
document.getElementById("ams").innerHTML=half2Thing.length
}

function wwww()
{   
document.getElementById("sss").innerHTML=allThing.length
}