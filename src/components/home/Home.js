import AppContext from '../../Context/AppContext';
import { useContext } from 'react';
import { Box } from '@material-ui/core';
function Home() {
const { setNavTitle} = useContext(AppContext);
setNavTitle("Richard Haydens Portfolio")
    

return (
        <Box>
       
        </Box>
    )
}
export default Home