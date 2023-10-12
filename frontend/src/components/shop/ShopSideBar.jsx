import {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, setFilterOptions } from '../../store/productSlice';

export default function ShopSideBar() {
  const dispatch=useDispatch();
  const filterOptions=useSelector((state)=>state.products.filterOptions)
const [expanded, setExpanded] = useState(window.innerWidth>770 ? 
  {
  panel1:true,
  panel2:true,
  panel3:true,
}:{
  panel1:false,
  panel2:false,
  panel3:false,

});
  const handleChange = (panel) => (e, newExpanded) => {
   setExpanded({...expanded,[panel]:newExpanded})
   
  };
  const filterOptionsHandler=(id,val)=>{
    dispatch(setFilterOptions({id:id,val}))
  }
  useEffect(()=>{
    dispatch(filterProducts())
  },[filterOptions])
  
  return (
    <div className='w-[100%] mb-8 md:mb-0 md:w-[max-content] shadow-sm border rounded-2xl p-4'>
      <Accordion expanded={expanded.panel1} id='panel1' onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex items-center gap-2 mb-2">
            <input checked={filterOptions.brand==='all'} type='radio' onChange={()=>filterOptionsHandler('brand','all')} value={'all'}  />
            <p>All</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input checked={filterOptions.brand==='apple'} onChange={()=>filterOptionsHandler('brand','apple')} type='radio' value={'apple'} />
            <p>Apple</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.panel2}  id='panel2' onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex items-center gap-2 mb-2">
            <input type='radio' checked={filterOptions.category==='all'} onChange={()=>filterOptionsHandler('category','all')} value={'all'}  />
            <p>All</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type='radio'  checked={filterOptions.category==='mobile'} onChange={()=>filterOptionsHandler('category','mobile')} value={'mobile'} />
            <p>Mobile</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type='radio' checked={filterOptions.category==='notebooks'} onChange={()=>filterOptionsHandler('category','notebooks')} value={'notebooks'}  />
            <p>Notebooks</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.panel3}  id='panel3' onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="flex items-center gap-2 mb-2">
            <input type='checkbox' value={'all'} checked={filterOptions.price==='all'} onChange={()=>filterOptionsHandler('price','all')} />
            <p>All</p>
          </div>
        <div className="flex items-center gap-2 mb-2">
            <input type='checkbox' value={'1to500'} checked={filterOptions.price==='1to500'} onChange={()=>filterOptionsHandler('price','1to500')} />
            <p>$1 to $500</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type='checkbox' value={'500to1500'} checked={filterOptions.price==='500to1500'} onChange={()=>filterOptionsHandler('price','500to1500')} />
            <p>$500 to $1500</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type='checkbox' value={'1500to3000'}  checked={filterOptions.price==='1500to3000'} onChange={()=>filterOptionsHandler('price','1500to3000')}/>
            <p>$1500 to $3000</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type='checkbox' value={'3000to5000'} checked={filterOptions.price==='3000to5000'} onChange={()=>filterOptionsHandler('price','3000to5000')} />
            <p>$3000 to $5000</p>
          </div>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}