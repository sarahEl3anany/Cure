export const useHeader = () => {
  const showHeader = useState('showHeader', () => true)
  const headerTitle = useState('headerTitle', () => '')
  const backRoute = useState('backRoute', () => '/home')
  const headerIcon = useState('headerIcon', () => '')
  const routeHeaderIcon = useState('routeHeaderIcon', () => '')
  const headerActions = useState('headerActions', () => [] as Array<{ icon: string; key: string }>)
  const headerActionKey = useState('headerActionKey', () => '')
  return { showHeader, headerTitle, backRoute, headerIcon, routeHeaderIcon, headerActions, headerActionKey }
}
