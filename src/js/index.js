const qrcodeGenerator = document.querySelector('.qrcode-generator');
const qrcodeInp = qrcodeGenerator.querySelector('input');
const qrcodeImg = qrcodeGenerator.querySelector('.qrcode');

const qrcode = new QRCode(qrcodeImg, { width: 300, height: 300, useSVG: true });

const makeCode = () => {
	if (qrcodeInp.value) qrcode.makeCode(qrcodeInp.value);
	else qrcodeImg.querySelector('img').src = '';
};

qrcodeInp.oninput = makeCode;
