import * as S from './styles'
import { Header } from '../../components/home/home-header'
import { SideBar } from '../../components/home/home-sidebar'
import { Friends } from '../../components/home/home-friends'
import { Posts } from '../../components/home/home-post'


function HomeTemplate() {
	return (
		<S.Wrapper>
			<S.GridLayout>
				<Header gridPosition="top" />
				<SideBar gridPosition="left" />
				<Posts gridPosition="center" />
				<Friends gridPosition="right" />
			</S.GridLayout>
		</S.Wrapper>
	)
}

export { HomeTemplate }