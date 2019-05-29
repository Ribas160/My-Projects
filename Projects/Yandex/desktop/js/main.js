let device = document.getElementsByClassName('slider1');
let devices = [];

/* Add device's elements to new array, because it doesn't work in first array */
for (var i = 0; i < device.length; i++) {
  devices.push(device[i]);
}

let distance1 = devices[0].offsetHeight + 15;
let deviceN2 = document.querySelectorAll('.slider2');
let devices2 = [];

/* The same thing like in previous comment */
for (var i = 0; i < deviceN2.length; i++) {
  devices2.push(deviceN2[i]);
}

let distance2 = devices2[0].offsetWidth + 15;

let button1 = document.getElementById('button1');
let arrowLeft1 = document.querySelector('#arrowLeft1');
let arrowRight1 = document.querySelector('#arrowRight1');
let arrowLeft2 = document.querySelector('#arrowLeft2');
let arrowRight2 = document.querySelector('#arrowRight2');
let select = document.querySelectorAll('.select');
let kitchen = document.querySelectorAll('.kitchen');
let hall = document.querySelectorAll('.hall');
let bulb = document.querySelectorAll('.bulb');
let cam = document.querySelectorAll('.cam');
let selectedDevicesBlock = document.querySelector('#selectedDevicesBlock');


let deviceN3 = document.querySelectorAll('.slider3');
let devices3 = [];
for (var i = 0; i < device.length; i++) {
  devices3.push(deviceN3[i]);
}

/* Add slider fiture for all devices by OOP */

class Slider {
  constructor(transfer, position, devices, i) {
    this.transfer = transfer;
    this.position = position;
    this.devices = devices;
    this.i = i;
  }
  slideTop() {
    this.i++;
    this.position -= this.transfer;
    if (this.i == 6) {
      this.position = 0;
      this.i = 0;
    }
    for (var i = 0; i < this.devices.length; i++) {
      this.devices[i].style.top = this.position + 'px';
    }
  }


  slideLeft() {
    this.i++;
    this.position -= this.transfer;
    for (var i = 0; i < this.devices.length; i++) {
      this.devices[i].style.left = this.position + 'px';
    }
  }


  slideRight() {
    this.i++;
    this.position += this.transfer;
    for (var i = 0; i < this.devices.length; i++) {
      this.devices[i].style.left = this.position + 'px';
    }
  }
}
let Slider1 = new Slider(distance1, 0, devices, 0);
let Slider2 = new Slider(distance2, 0, devices2, 0);
let Slider3 = new Slider(distance2, 0, devices3, 0);

/* Changes for devices on click */

class Replacement {
  constructor(device, click, firstChild1, firstChild2, lastChild1, lastChild2) {
    this.device = device;
    this.click = click;
    this.firstChild1 = firstChild1;
    this.firstChild2 = firstChild2;
    this.lastChild1 = lastChild1;
    this.lastChild2 = lastChild2;
  }
  substitution() {
    this.click? (this.device.firstChild.src = this.firstChild2, this.device.lastChild.innerHTML = this.lastChild2) : (this.device.firstChild.src = this.firstChild1, this.device.lastChild.innerHTML = this.lastChild1);
    this.click = !this.click;
  }
}
let device0 = new Replacement(device[0], true, "img/icon_temperature@1x.png", "img/icon_temperature_2@1x.png", "Начнет охлаждать в 16:30", "Охлаждает");
let device1 = new Replacement(device[1], true, "img/icon_sun@1x.png", "img/icon_sun_2@1x.png", "Выключено", "Включено");
let device2 = new Replacement(device[2], true, "img/icon_sun@1x.png", "img/icon_sun_2@1x.png", "Включится в 17:00", "Включено");
let device3 = new Replacement(device[3], true, "img/icon_temperature@1x.png", "img/icon_temperature_2@1x.png", "Выключено до 17:00", "Включено");
let device4 = new Replacement(device[4], true, "img/icon_sun@1x.png", "img/icon_sun_2@1x.png", "Включится в 17:00", "Включено");
let device5 = new Replacement(device[5], true, "img/icon_sun_2@1x.png", "img/icon_sun@1x.png", "Включено", "Выключено");
let device6 = new Replacement(device[6], true, "img/icon_sun@1x.png", "img/icon_sun_2@1x.png", "Выключено", "Включено");

device[0].parentNode.addEventListener('click', function(e) {
  let self = e.target;
  let i = device.length;
  while(i--) {
    if (device[i] == self) {
      let x = i;
      if(x == 0) {
        device0.substitution();
      } else if (x == 1) {
        device1.substitution();
      } else if (x == 2) {
        device2.substitution();
      } else if (x == 3) {
        device3.substitution();
      } else if (x == 4) {
        device4.substitution();
      } else if (x == 5) {
        device5.substitution();
      } else {
        device6.substitution();
      }

   }
 }
});

/* Yellow color to chose type of devices */

select[0].style.background = '#FFD93E';
select[0].parentNode.addEventListener('click', function(e) {
  let self = e.target;
  if (self.className != 'select') {
    return;
  }
  let i = select.length;
  for (let i = 0; i < select.length; i++) {
    select[i].style.background = '#F7F7F7';
  }
  while(i--) {
    if (select[i] == self) {
      let x = i;
      select[x].style.background = '#FFD93E';
      break;
    }
  }
})

/* Sorting */

select[0].parentNode.addEventListener('click', function(e) {
  for (let i = 0; i < deviceN3.length; i++) {
    deviceN3[i].style.display = 'none';
  }
  for (let i = 0; i < kitchen.length; i++) {
    kitchen[i].style.display = 'none';
  }
  for (let i = 0; i < hall.length; i++) {
    hall[i].style.display = 'none';
  }
  for (let i = 0; i < bulb.length; i++) {
    bulb[i].style.display = 'none';
  }
  for (let i = 0; i < cam.length; i++) {
    cam[i].style.display = 'none';
  }
  let self = e.target;
  let i = select.length;
  while (i--) {
    if (select[i] == self) {
      let x = i;
      if (x == 0) {
        for (let i = 0; i < deviceN3.length; i++) {
          deviceN3[i].style.display = 'flex';
        }
      } else if (x == 1) {
        for (let i = 0; i < deviceN3.length; i++) {
          kitchen[i].style.display = 'flex';
        }
      } else if (x == 2) {
        for (let i = 0; i < hall.length; i++) {
          hall[i].style.display = 'flex';
        }
      } else if (x == 3) {
        for (let i = 0; i < bulb.length; i++) {
          bulb[i].style.display = 'flex';
        }
      } else {
        for (let i = 0; i < cam.length; i++) {
          cam[i].style.display = 'flex';
        }
      }
    }
  }
})



/* Screen width less then 1366px */

let arrows = document.querySelectorAll('.arrows');
