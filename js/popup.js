const modalLink = document.querySelector('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 500;

modalLink.addEventListener('click', function (e) {
  let modal = document.querySelector('.popup');
  modalOpen(modal);
  e.preventDefault();
});
const modalCloseIcon = document.querySelector('.close-popup');
const el = modalCloseIcon;
el.addEventListener('click', function (e) {
  modalClose(el.closest('.popup'));
  e.preventDefault();
});

function modalOpen(curentModal) {
  if (curentModal && unlock) {
    const modalActive = document.querySelector('.popup');
    if (modalActive) {
      modalClose(modalActive, false);
    } else {
      bodyLock();
    }
    curentModal.classList.add('open');
    curentModal.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-content')) {
        modalClose(e.target.closest('.popup'));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    modalActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth -
    document.querySelector('.wrapper-medium').offsetWidth +
    'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const modalActive = document.querySelector('.popup.open');
    modalClose(modalActive);
  }
});