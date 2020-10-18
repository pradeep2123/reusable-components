import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
    Grid,
    Typography,
    Button
  } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      // marginTop: theme.spacing(3),
      // height: "calc(100vh - 315px)",
      overflow: "auto"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
    }
    
}));

export function Filter(props) {
    const classes = useStyles();
    const {inputs,conditions,types} = props;
    return (
    <Paper className={classes.root} square>

            {props.state && conditions && props.state.map((k,i)=>
            <>
            <Grid container direction="row"  alignItems="stretch">

                <Grid   item xs={2} sm={2} md={4} lg={2} xl={2}>
                <FormControl className={classes.formControl}>
                    <Select
                    variant={"outlined"}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={k["type"]}
                    onChange={(val)=>props.actions(val.target.value,"type",i)}
                    >
                    {types && types.length > 0 && types.map((p,ind)=>
                     <MenuItem  value={p}>{p==="Where"&& i>0 ? " ": p}</MenuItem> 
                    )}
                    </Select>
                </FormControl>

                </Grid>
                <Grid   item xs={2} sm={2} md={4} lg={2} xl={2}>
                <FormControl className={classes.formControl}>
                    <Select
                    variant={"outlined"}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={k["input"]}
                    onChange={(val)=>props.actions(val.target.value,"input",i)}
                    >
                    {inputs && inputs.length > 0 && inputs.map((p,ind)=>
                        <MenuItem value={p["dataIndex"]}>{p["title"]}</MenuItem>
                    )}
                    </Select>
                </FormControl>
                </Grid>
                <Grid   item xs={2} sm={2} md={4} lg={2} xl={2}>
                <FormControl className={classes.formControl}>
                    <Select
                    variant={"outlined"}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.state[i].conditions}
                    onChange={(val)=>props.actions(val.target.value,"conditions",i)}
                    >
                    {conditions && conditions.length > 0 && conditions.map((p,ind)=>
                        <MenuItem value={p}>{p}</MenuItem>
                    )}
                    </Select>
                </FormControl>                </Grid>
                <Grid   item xs={2} sm={2} md={4} lg={2} xl={2}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(val)=>props.actions(val.target.value,"value",i)} value={k["value"]} />
                </Grid>
                <Grid   item xs={2} sm={2} md={4} lg={2} xl={2}>
                    <p onClick={()=>props.actions("","delete",i)}>Delete</p>
                </Grid>
                </Grid>

            </>
                )}
            

        <Grid  direction="row">
            <Button onClick={()=>props.addFilter()}> Add Filter 
            </Button>
        </Grid>

                

        </Paper>
    )
}