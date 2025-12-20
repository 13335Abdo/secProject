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
var y = -1


if (localStorage.getItem("contect")) {
    allThing = JSON.parse(localStorage.getItem("contect"))


    display()

}


addd = function add() {
    
    var imgName = userimgInput.files[0].name

    var imgPath = "images/" + imgName
    allThing.push(
        {
            namee: userNameInput.value,
            phone: userPassInput.value,
            email: userEmailInput.value,
            address: userAddressInput.value,
            note: userNoteInput.value,
            group: userGroubInput.value,
            img:imgPath
        }
    )

    localStorage.setItem("contect", JSON.stringify(allThing))
    display()
    clear()
}

function display() {
    var cartona = ""
    for (var i = 0; i < allThing.length; i++) {
        cartona += design(i)
    }
    document.getElementById("contactsContainer").innerHTML = cartona
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

        if (y === -1) {
            addd();        // ➕ إضافة
        } else {
            update();      // ✏️ تعديل
        }

        overLay.style.display = "none";
        succes();
        clear();

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
    y = -1
}


function design2(v)
{
    return`

    <div class="mini-card">
  <div class="left">
    <div class="mini-avatar">E</div>

    <div class="mini-info">
      <h6>ergwergw</h6>
      <span>01000000003</span>
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
    y = x;
    allThing.splice(x, 1)
    localStorage.setItem("contect", JSON.stringify(allThing))
    display()

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

