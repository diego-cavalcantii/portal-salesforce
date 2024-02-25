import './App.css'
import { Header } from './components/Header/Header';
import { Body } from "./components/Body/Body";
import { SectionAdver } from './components/Section/SectionAdver/SectionAdver';

interface AppContainerProps {
  children?: React.ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className='app-container'>{children}</div>
  )
}

function App() {

  return (
    <AppContainer>
      <Header />
      <Body>
        <SectionAdver />
      </Body>

    </AppContainer>
  )
}

export default App