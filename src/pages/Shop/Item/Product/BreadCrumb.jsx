import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useLocation, Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const BreadCrumb = () => {
    const { pathname } = useLocation()
    // .split will provide every item before and after slash and .filter will remove empty strings or undefined items from the array
    const pathnames = pathname.split('/shop').filter(x => x)
    console.log('pathnames', pathnames);
    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" color="textPrimary">
            {
                pathnames.length > 0 ?
                    <Link to='/shop'>
                        <Typography variant="body1">
                            Shop
                        </Typography>
                    </Link>
                    : <Typography variant="body1">Shop</Typography>
            }
            {pathnames.map((name, index) => {
                const routeTo = pathnames.slice(0, index + 1).join('/shop')
                const isLast = index === pathnames.length - 1
                console.log('routeTo', routeTo);
                return (
                    isLast ?
                        <Typography variant="body1" style={{ textTransform: "capitalize" }
                            } key={Math.random() * 999} >
                            {name.replace(/-/g, " ").replace(/\//g, "")}
                        </Typography>
                        :
                        <Link to={routeTo} style={{ textTransform: "capitalize" }}>
                            <Typography variant="body1">
                                {name.replace(/-/g, " ")}
                            </Typography>
                        </Link>
                )
            })}
        </Breadcrumbs >
    );
}
export default BreadCrumb