// 검증 로직
export const checkValidationFile = (file?: File): boolean => {
  // 1. 파일이 있는지
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false; //
  }

  // 2. 파일 용량 검증 (5MB 제한)
  // 5MB는 5 * 1024 * 1024 바이트입니다.
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  // 3. 파일 확장자 검증
  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("png") &&
    !file.type.includes("jpg")
  ) {
    alert("jpeg, jpg, png 파일만 업로드 가능합니다.");
    return false;
  }
  return true;
};
