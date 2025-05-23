import { createRoot } from 'react-dom/client';
import FrameworkList from './frameworkList';
import FrameworkListSearchFilter from './FrameworkListSearchFilter';
import './tailwind.css';
import ResponsiveDesign from './ResponsiveDesign';


createRoot(document.getElementById('root')).render(
  <div>
    {/*<FrameworkList/>*/}
    <FrameworkListSearchFilter/> 
    {/*<ResponsiveDesign/> */}
  </div>
)
