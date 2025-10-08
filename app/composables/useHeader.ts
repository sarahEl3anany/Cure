export const useHeader = () => {
  const showHeader = useState('showHeader', () => true)
  const headerTitle = useState('headerTitle', () => '')
  const backRoute = useState('backRoute', () => '/home')
  return { showHeader, headerTitle, backRoute }
}
