import * as S from './styles'

import { Post } from "../../components/post"

function HomeTemplate() {
	return (
		<S.Wrapper>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</S.Wrapper>
	)
}

export { HomeTemplate }