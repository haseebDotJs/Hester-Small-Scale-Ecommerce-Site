import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { GlobalState } from '../../../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 280,
    },
    tableCell: {
        color: 'rgb(158,153,163)',
        fontSize: '.7rem',
        fontWeight: [theme.typography.fontWeightLight],
        padding: '100px auto'
    },
    firstRow: {
        display: 'flex',
        alignItems: 'center'
    },
    firstColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    itemImage: {
        width: '100%',
        maxWidth: '100px',
        minWidth: '50px'

    },
    tableRow: {
        padding: '150px auto'
    },
    delete: {
        cursor: 'pointer',
        color: 'rgb(158,153,163)',
        "&:hover": {
            color: 'black'
        }
    },
    item: {
        textTransform: 'capitalize',
        fontWeight: [theme.typography.fontWeightRegular],
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7rem'
        }
    },
    quantity: {
        width: "100%",
        maxWidth: "50px",
        textAlign: "center"
    },
    subTotalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    subTotal: {
        textTransform: 'capitalize',
        fontWeight: [theme.typography.fontWeightLight]
    }
}));

// function createData(name, calories, fat, carbs) {
//     return { name, calories, fat, carbs };
// }


export default function BasicTable() {
    const classes = useStyles();
    const { items: { items }, update__item } = useContext(GlobalState)

    const changeItemsQuantity = (newQuantity, itemId) => {
        console.log('new quantity is: ', newQuantity);
        const extractItem = items.filter(item => item.id === itemId)
        const itemWithNewQuantity = [{ ...extractItem[0], quantity: newQuantity }]
        update__item(itemWithNewQuantity);
    }
    const subTotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)
    console.log('subtotal', subTotal);
    console.log("items", items);
    return (
        <Box>
            <TableContainer style={{ outline: 'none', border: 'none' }}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCell}>ITEM</TableCell>
                            <TableCell className={classes.tableCell} align="center">PRICE</TableCell>
                            <TableCell className={classes.tableCell} align="center">QUANTITY</TableCell>
                            <TableCell className={classes.tableCell} align="right">TOTAL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow className={classes.tableRow} key={item.name}>
                                <TableCell component="th" scope="row" className={classes.firstRow}>
                                    <Box mr={{ sm: 5, md: 5 }} >
                                        <Typography className={classes.delete}>×</Typography>
                                    </Box>
                                    <Box className={classes.firstColumn}>
                                        <Box>
                                            <img src={item.image} className={classes.itemImage} />
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={classes.item}>{item.title}</Typography>
                                            {item.availibility < 10 && <Typography className={classes.item} variant="body2" color="primary" >Only {item.availibility} available</Typography>}
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">${item.price}</TableCell>
                                <TableCell align="center">
                                    <input className={classes.quantity} type="number" defaultValue={item.quantity} max={item.availibility} onChange={(e) => changeItemsQuantity(e.target.value, item.id)} min={1} />
                                </TableCell>
                                <TableCell align="right">${item.price * item.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
            <Box mt={5} className={classes.subTotalContainer}>
                <Box>
                    <Typography variant="body1" align="right" className={classes.subTotal}>
                        Subtotal
                    </Typography>
                </Box>
                <Box ml={3}>
                    <Typography variant="body1" align="right" className={classes.subTotal}>
                        ${subTotal}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}