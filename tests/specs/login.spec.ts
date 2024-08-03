import {HomeScreen} from "../screens/home/Home.screen"
import { LoginAssertion } from "../screens/login/Login.assertion"

describe('Login', () => {
    it('Should log in', async () => {
        const Home = new HomeScreen('WebDriverIO')
        const Login = new LoginAssertion()
        
        await Home.openLoginScreen()
        console.log('AppName: ', Home._appName)

        await Login.assertScreen()

    })
})