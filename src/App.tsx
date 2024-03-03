import { useRef } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { sections } from "./details.json";
import Footer from './component/footer';
import Home from './component/home';
import ContactComponent from './component/contact';
import GoogleReviews from './component/reviews';
import Gallery from './component/gallery';
import Details from './component/details';
import ResponsiveAppBarWithCustomDrawer from './component/header';
  
function Section({ component: Component, ...props }: any) {
    return <Component {...props} />;
  }

function App() {
    const sectionsPart = [
      { name: sections.acceuil, component: Home, ref: useRef(null) },
      { name: sections.temoignages, component: GoogleReviews, ref: useRef(null) },
      { name: sections.quiSommesNous, component: Details, ref: useRef(null) },
      { name: sections.gallerie, component: Gallery, ref: useRef(null) },
      { name: sections.contact, component: ContactComponent, ref: useRef(null) },
    ];
  
    const scrollTo = (ref: any) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const handleNavigate = (sectionName: string) => {
      const section = sectionsPart.find((sec) => sec.name === sectionName);
      if (section) {
        scrollTo(section.ref);
      }
    };
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ResponsiveAppBarWithCustomDrawer onToggle={() => { }} onNavigate={handleNavigate} />
          {sectionsPart.map(({ name, component, ref }, index) => (
            <div ref={ref} key={index}>
              <Section component={component} />
            </div>
          ))}
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }

  export default App;