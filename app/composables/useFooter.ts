export const useFooter = () => {
  const showFooter = useState('showFooter', () => false)
  return { showFooter }
}
