import { Box, Divider, Stack, Typography, Grid } from "@mui/material"

import AuthLayout from "../../../components/AuthLayout"
import CustomInput from "../../../components/CustomInput"
import Logo from "../../../components/Logo"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../utils/colors"
import CustomButton from "../../../components/CustomButton"
import useLayout from "../../../hooks/useLayout"
import { Link } from "react-router-dom"
import driver from "../../../assets/driver-png.png"


const Register = () => {
  const { isMedium } = useLayout()
  return (
    <Box>
      <AuthLayout>
        <Box display={"flex"} flex={1} alignItems={"center"} justifyContent={"center"}>
          <Grid container>
            <Grid xs={12} md={6} gap={4}>
              <Box py={3}>
                <Logo light={isMedium ? false : true} />
              </Box>
              <Box flex={1} justifyContent={"center"} display={{ xs: "none", md: "block" }} alignContent={"center"}>
                <img src={driver} />
              </Box>
            </Grid>
            
            <Grid xs={12} md={6}>
              <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Stack py={[5, 8, 14]} px={[0, 0, 4]} gap={3} width={"100%"}>
                  <Stack mb={3} width={"100%"}>
                    <Typography variant="h5" fontWeight={600} mb={2}>Registration</Typography>
                    <Divider sx={{ width: 60, border: "none", height: 4, bgcolor: SECONDARY_COLOR, borderRadius: 2 }} />
                  </Stack>

                  <Stack direction={"row"} gap={3} width={"100%"}>
                    <CustomInput placeholder="Firstname"  />
                    <CustomInput placeholder="Lastname" />
                  </Stack>
                  <CustomInput type={"email"} placeholder="Email" />
                  <CustomInput type={"tel"} placeholder="Phone No" />
                  <CustomInput type={"password"} placeholder="Password" />

                  <Stack mt={3}>
                    <CustomButton
                      buttonProps={{ py: .5 }}
                    >Register</CustomButton>
                  </Stack>

                  <Stack direction={"row"} gap={1}>
                    <Typography color={"#333"} fontWeight="500" fontSize={".9rem"}>Already have an account?</Typography>
                    <Link style={{ fontSize: ".9rem", fontWeight: "500", color: PRIMARY_COLOR, textDecoration: "none" }} to={"/login/rider"}>Login</Link>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </Box>
  )
}

export default Register