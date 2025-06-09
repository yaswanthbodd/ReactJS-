import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

export const MuiTable = ()=> {
    return(
        <div style={{margin : '60px'}}>
            <TableContainer component={Paper} sx={{ height : '300px'}} elevation={5}>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row)=>(
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


const tableData = [
    {
  "id": 1,
  "first_name": "Burl",
  "last_name": "Scholtis",
  "email": "bscholtis0@usda.gov",
  "gender": "Male",
  "ip_address": "172.17.67.236"
}, {
  "id": 2,
  "first_name": "Ugo",
  "last_name": "Chard",
  "email": "uchard1@psu.edu",
  "gender": "Male",
  "ip_address": "93.219.97.71"
}, {
  "id": 3,
  "first_name": "Northrop",
  "last_name": "Garnsey",
  "email": "ngarnsey2@linkedin.com",
  "gender": "Male",
  "ip_address": "88.69.165.242"
}, {
  "id": 4,
  "first_name": "Eldridge",
  "last_name": "Cordaroy",
  "email": "ecordaroy3@bandcamp.com",
  "gender": "Male",
  "ip_address": "214.28.250.169"
}, {
  "id": 5,
  "first_name": "Leticia",
  "last_name": "Goodayle",
  "email": "lgoodayle4@pagesperso-orange.fr",
  "gender": "Female",
  "ip_address": "28.141.171.246"
}, {
  "id": 6,
  "first_name": "Phaidra",
  "last_name": "Goymer",
  "email": "pgoymer5@nytimes.com",
  "gender": "Female",
  "ip_address": "31.19.79.141"
}, {
  "id": 7,
  "first_name": "Tulley",
  "last_name": "Duxbury",
  "email": "tduxbury6@timesonline.co.uk",
  "gender": "Male",
  "ip_address": "148.126.128.25"
}, {
  "id": 8,
  "first_name": "Shanda",
  "last_name": "Jephcott",
  "email": "sjephcott7@privacy.gov.au",
  "gender": "Genderfluid",
  "ip_address": "172.215.230.37"
}, {
  "id": 9,
  "first_name": "Arlin",
  "last_name": "Robottham",
  "email": "arobottham8@soundcloud.com",
  "gender": "Bigender",
  "ip_address": "42.215.218.125"
}, {
  "id": 10,
  "first_name": "Rica",
  "last_name": "Klos",
  "email": "rklos9@e-recht24.de",
  "gender": "Female",
  "ip_address": "3.72.18.244"
}]