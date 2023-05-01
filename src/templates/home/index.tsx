import * as S from './styles'
import { Post } from '../../components/home/home-post/list-posts'
import { Header } from '../../components/home/home-header'
import { SideBar } from '../../components/home/home-sidebar'
import { Friends } from '../../components/home/home-friends'


function HomeTemplate() {
	return (
		<S.Wrapper>
			<S.GridLayout>
				<Header gridPosition="dois" />
				<Post gridPosition="tres" />
				<SideBar gridPosition="um" />
				<Friends gridPosition="quatro" />
			</S.GridLayout>
		</S.Wrapper>
	)
}

export { HomeTemplate }