import { Friends } from '../../organisms/home/home-friends'
import { Header } from '../../organisms/home/home-header'
import { Posts } from '../../organisms/home/home-post'
import { SideBar } from '../../organisms/home/home-sidebar'
import * as S from './styles'

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

