export const useHeader = () => {
  const showHeader = useState('showHeader', () => true)
  const headerTitle = useState('headerTitle', () => '')
  const backRoute = useState('backRoute', () => '/home')
  const headerIcon = useState('headerIcon', () => '')
  const routeHeaderIcon = useState('routeHeaderIcon', () => '')
  return { showHeader, headerTitle, backRoute, headerIcon, routeHeaderIcon }
}
