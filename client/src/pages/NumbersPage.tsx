import usePhoneNumbers from "../hooks/useNumbers";
import PhoneNumberCard from "../components/data/PhoneNumberCard";
import {Button, Input, makeStyles, TextField} from "@material-ui/core";
import {useState} from "react";
import PhoneNumberUpsertModal from "../components/modals/PhoneNumberUpsertModal";
import {Refresh} from "@material-ui/icons";
import {Autocomplete} from "@material-ui/lab";
import {PhoneNumber} from "../types/PhoneNumberTypes";


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        display: "flex",
        flexDirection: 'column'
    },
    phoneNumberListContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    headerContainer: {
        margin: 30,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down(750)]: {
            flexDirection: 'column',
            "& button": {
                margin: '10px'
            },
        }
    },
    searchField: {
        alignSelf: 'center',
        [theme.breakpoints.down(750)]: {
            order: 100
        }
    }
}));

const NumbersPage = () => {
    const [upsertModalState, setUpsertModalState] = useState(false);
    const classes = useStyles();
    const {numbers, refreshPhoneNumbers} = usePhoneNumbers();

    const handleUpsertModalClose = () => {
        setUpsertModalState(false);
        refreshPhoneNumbers();
    }

    const filterPageResults = (e: any, newValue: string | null) => {
        if (newValue) {
            refreshPhoneNumbers(newValue)
        } else {
            refreshPhoneNumbers()
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <Button variant={"contained"} onClick={() => setUpsertModalState(true)} color={"primary"}>Add
                    Number</Button>
                <Autocomplete
                    className={classes.searchField}
                    id="search-numbers"
                    options={numbers ? numbers.sort((a, b) => -b.name[0].localeCompare(a.name[0])) : []}
                    groupBy={(option) => option.name[0]}
                    getOptionLabel={(option) => option.name}
                    getOptionSelected={(option, value) => option.name === value.name}
                    style={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Search Name" variant="outlined"/>}
                    onChange={(e, newValue) => filterPageResults(e,newValue? newValue.name : null)}
                    onInputChange={(e, newValue) => filterPageResults(e, newValue)}
                />
                <Button variant={"contained"} onClick={() => refreshPhoneNumbers()}><Refresh/></Button>
            </div>
            <div className={classes.phoneNumberListContainer}>
                {numbers?.map((number) => {
                    return (
                        <PhoneNumberCard refreshPhoneNumbers={refreshPhoneNumbers} key={number._id}
                                         phoneNumber={number}/>
                    )
                })}
            </div>
            < PhoneNumberUpsertModal handleClose={handleUpsertModalClose} open={upsertModalState}/>
        </div>
    )
}


export default NumbersPage;