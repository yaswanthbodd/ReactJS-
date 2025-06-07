import { Stack, TextField, InputAdornment, Input, IconButton } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
export const MuiTextFields = ()=>{
    const [value, setValue] = useState('');
    const [passwordView, setPasswordView] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((show) => !show);
    return(
        <Stack spacing={4}>
            <Stack direction={'row'} style={{margin: '20px'}} spacing={2}>
                <TextField label='name' variant="outlined"/>
                <TextField label='password' variant='filled'/>
                <TextField label='name' variant="standard"/>
            </Stack>
            <Stack direction={'row'} style={{margin : '20px'}} spacing={2}>
                <TextField label='password' size="small" color="secondary" type='password'/>
            </Stack>
            <Stack direction={'row'} style={{margin:'20px'}} spacing={2}>
                <TextField label='Form Input' required />
                <TextField label='password' type="password" helperText='Do not share your password with anyone' />
                <TextField label='Read Only' InputProps={{htmlInput :{ readOnly : true}}}/>
                <TextField label="Read Only" defaultValue="You can't edit me" slotProps={{
                        htmlInput: { readOnly: true }
                        }}
                variant="outlined" />
            </Stack>
            <h1>Adornments</h1>
            <Stack direction={'row'} spacing={2} style={{margin: '20px'}}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}/>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position="end">KG</InputAdornment>
                }} />

                <TextField label="Password" type={passwordView ? 'text' : 'password'} value={value} onClick={()=>setPasswordView(!passwordView)} onChange={(e)=>setValue(e.target.value)} error={!value} helperText = {!value ? 'Required' : 'Do not share your password'} InputProps={{
                    endAdornment : (
                        <InputAdornment position="end">
                            <IconButton onClick={()=>{setPasswordView(!passwordView)}} edge="end">
                                {passwordView ? <VisibilityOffIcon/> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} autoComplete="current-password"/>

                <TextField
      label="Password"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      autoComplete="current-password"
    />
            </Stack>
        </Stack>
    )
}