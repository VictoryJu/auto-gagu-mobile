export const handleCopyRecipe = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('영수증 번호가 복사되었습니다.');
  } catch (e) {
    alert('복사 실패');
  }
};
