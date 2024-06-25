const properties = [
  {
    id: 1,
    price: 300000,
    description: "غرفة لشخصين",
    location: "حمص",
    details: `
      المنطقة :   قرب المدينة الجامعية
    `,
    image: "photos/img2.jpeg",
  },
  {
    id: 2,
    price: 700000,
    description: "صالة أعراس",
    location: "بانياس",
    details: `
      المنطقة : شارع القوتلي 
      تتضمن فريق تصوير كامل
      + مطعم للتجهيز المأكولات 
    `,
    image: "photos/img1.jpg",
  },
  {
    id: 3,
    price: 650000,
    description: "شقة فارغة",
    location: "حمص",
    details: `
      المنطقة :  الحميدية
    `,
    image: "photos/img4.jpeg",
  },
  {
    id: 4,
    price: 700000,
    description: "شقة ",
    location: "دمشق ",
    details: `
      المنطقة :   المزة
    `,
    image: "photos/img3.jpeg",
  },
  {
    id: 5,
    price: 300000,
    description: "منزل صغير",
    location: "حماة",
    details: `
    المنطقة :ساحة العاصي
    `,
    image: "photos/img5.jpeg",
  },
  {
    id: 6,
    price: 500000,
    description: "شقة مفروشة",
    location: "ريف دمشق",
    details: `
    المنطقة: السيدة زينب 
    `,
    image: "photos/img6.jpeg",
  },
  {
    id: 7,
    price: 250000,
    description: " دكان مساحة  50 م",
    location: "حمص",
    details: `
     _ المنطقة :  الحميدية  

    `,
    image: "photos/img9.jpeg",
  },
  {
    id: 8,
    price: 350000,
    description: "شقة 60 م ",
    location: "حمص",
    details: `
     _ المنطقة :  الوعر   
    يتوفر كراج خاص بالناء - طابق ثاني 
    `,
    image: "photos/img10.jpg",
  },
  {
    id: 9,
    price: 500000,
    description: " شقة غرفة وصالة مساحة 70 م",
    location: "دمشق",
    details: `
     _ المنطقة :  ركن الدين
      متوفر كراج - الطابق الثالث
    `,
    image: "photos/img8.jpeg",
  },
  {
    id: 10,
    price: 900000,
    description: "منزل عائلي",
    location: "حمص",
    details: `
     _ المنطقة : المساكن الغربية
    `,
    image: "photos/img7.jpeg",
  },

 
];

const createPropertiesTable = () => {
  const propertiesRowsContainer = document.querySelector(".properties .body");

  properties.forEach((property) => {
    propertiesRowsContainer.innerHTML += `
        <div class="row">
            <div class="col">${property.location}</div>
            <div class="col">${property.description}</div>
            <div class="col">${property.price} syp</div>
            <div class="col">
                <button class="col-but details-but"> التفاصيل</button>
            </div>
            <div class="col">
                <button class="col-but but-select">إختيار </button>
            </div>
        </div>
        <div class="details-row">
            <div class="details-wrapper">
                <h2>تفاصيل اضافية</h2>
                <div class="details">${property.details}</div>
                <img src="${property.image}" alt="Property image" />
            </div>
        </div>
    `;
  });

  const buttons = document.querySelectorAll(".details-but");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const detailsRow = document.querySelectorAll(".details-row")[index];
      detailsRow.classList.toggle("show");
    });
  });
};

const selectProperty = () => {
  const continuebutton = document.querySelector(".but-continue");
  const buttons = document.querySelectorAll(".but-select");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const selectedProperty = properties[index];
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        continuebutton.disabled = true;
        return;
      }
      buttons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
      continuebutton.disabled = false;
      console.log(selectedProperty);
    });
  });
};

const modalHandler = () => {
  const continuebutton = document.querySelector(".but-continue");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-but");
  continuebutton.addEventListener("click", () => {
    if (continuebutton.disabled) {
      return;
    }
    modal.classList.add("show");
  });
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });
};

function arabicOnly(e) {
  console.log(e);
  var unicode = e.charCode ? e.charCode : e.keyCode;
  if (unicode != 8 && unicode != 32) {
    if (
      (unicode < 48 || unicode > 57) &&
      (unicode < 0x0600 || unicode > 0x06ff)
    )
      e.preventDefault();
    return false; 
  }
}


const formHandler = () => {
  const form = document.querySelector("form");
  const button = document.querySelector(".form-but");
  const name = document.querySelector("#name");
  const id = document.querySelector("#id");

  name.addEventListener("keypress", arabicOnly);
  id.addEventListener("keypress", (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
      e.preventDefault();
    }
  });
  id.addEventListener("change", (e) => {
    if (e.target.value.length !== 11) {
      e.target.classList.add("invalid");
      e.target.setCustomValidity("الرجاء إدخال رقم الهوية بشكل صحيح");
    } else {
      e.target.setCustomValidity("");
    }
  });
  button.addEventListener("click", () => {
    if (!form.checkValidity()) {
      return;
    }
    form.submit();
  });
};
function validateForm() {
  var captchaInput = document.getElementById("captcha").value;
  // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هنا

  // إظهار نافذة تأكيد
  var confirmation = confirm("تأكيد عملية الشراء؟");

  if (confirmation) {
      alert("تمت عملية الشراء بنجاح!");
      return true;
  } else {
      alert("تم إلغاء عملية الشراء.");
      return false;
  }
}
function generateCaptcha() {
  var captchaText = generateRandomString(6);
  document.getElementById("captcha").value = "";
  document.getElementById("captcha").placeholder = captchaText;
  document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
}
function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function changeCaptcha() {
  generateCaptcha();
}

createPropertiesTable();
selectProperty();
modalHandler();
formHandler();
