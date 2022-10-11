// 이메일 정규식 검사
// @만 포함되면 true
export const emailCheck = (email) => {
  let regExp = /[@]/;

  return email.trim() !== "" && email !== "undefined" && regExp.test(email);
};

// 패스워드 정규식 검사
// 6자 이상이면 true
export const passwordCheck = (password) => {
  let regExp = /.{8,}/;

  return (
    password.trim() !== "" && password !== "undefined" && regExp.test(password)
  );
};
