* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(76,175,80,0.15), transparent 40%),
    radial-gradient(circle at bottom right, rgba(74,144,226,0.12), transparent 40%),
    linear-gradient(to bottom right, #f7fbff, #f7fff9);
  color: #333;
}

.leaf {
  position: absolute;
  width: 260px;
  height: 260px;
  background: rgba(76,175,80,0.22);
  border-radius: 0 100% 0 100%;
  z-index: -1;
}

.leaf.one {
  top: 90px;
  left: -90px;
  transform: rotate(25deg);
}

.leaf.two {
  bottom: 140px;
  right: -100px;
  transform: rotate(-35deg);
}

header {
  background: rgba(255,255,255,0.9);
  padding: 22px 60px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
}

.logo {
  font-size: 24px;
  font-weight: 600;
}

.logo span {
  color: #4a90e2;
}

.container {
  max-width: 900px;
  margin: 80px auto;
  padding: 50px;
  background: rgba(255,255,255,0.78);
  border-radius: 26px;
  box-shadow: 0 35px 70px rgba(0,0,0,0.12);
}

h1 {
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

textarea {
  width: 100%;
  height: 120px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

button {
  padding: 13px 38px;
  border-radius: 30px;
  background: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
}

.loader {
  display: none;
  color: #4a90e2;
  font-weight: 500;
  margin-top: 15px;
}

.answer-box {
  display: none;
  background: #ecf5ff;
  border-left: 6px solid #4caf50;
  padding: 24px;
  border-radius: 16px;
  white-space: pre-wrap;
  margin-top: 20px;
}

footer {
  text-align: center;
  margin: 30px 0;
  font-size: 14px;
  color: #777;
}
