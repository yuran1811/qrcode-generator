<h1 align="center">QRCode Generator</h1>
<p align="center" style="font-size:16px"><strong>QRCode Generator Simple Demo</strong></p>
<p align="center">  
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="400" />
</p>

<p align="center">
  <img alt="Stars" src="https://badgen.net/github/stars/yuran1811/qrcode-generator">
  <img alt="Forks" src="https://badgen.net/github/forks/yuran1811/qrcode-generator">
  <img alt="Issues" src="https://badgen.net/github/issues/yuran1811/qrcode-generator">
  <img alt="Commits" src="https://badgen.net/github/commits/yuran1811/qrcode-generator">
  <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/yuran1811/qrcode-generator">
</p>

<div align="center"><a href="https://yuran1811.github.io/qrcode-generator/" target="_blank">Live Demo</a></div>

## Features

## Tech Stack

<img src="https://skill-icons-livid.vercel.app/icons?i=react,tailwind,ts,vite&gap=60" height="36" />

## Screenshots

<div style="display:flex;gap:12px;justify-content:center">
	<img src="./public/screenshots/home.png" style="width:45%;max-width:380px">
	<img src="./public/screenshots/card.png" style="width:45%;max-width:380px">
</div>

## Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed or downloaded on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)

**Cloning the Repository**

```bash
git clone https://github.com/yuran1811/qrcode-generator.git
cd qrcode-generator
```

**Installation**

- Enable `pnpm` to build and run the project

```bash
corepack enable pnpm
```

Install the project dependencies:

```bash
pnpm install
```

**Running the Project**

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## References

- This project uses [qrcodejs](https://davidshimjs.github.io/qrcodejs/) to generate the qrcode.
  - The qrcode which created by qrcodejs is unique
  - Read the [qrcodejs document](./src/libs/qrcodejs/README.md)
