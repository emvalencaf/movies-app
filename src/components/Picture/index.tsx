// styles
import * as Styled from './styles';

// types
export type PictureProps = {
	srcImg: string;
	altText?: string;
	showFigCaption?: boolean;
};

const Picture = ({ srcImg = '', altText = "a picture", showFigCaption = false }: PictureProps) => {
	return (
		<Styled.Picture>
			<img
				src={srcImg}
				alt={altText}
			/>
			{showFigCaption && <figcaption>{altText}</figcaption>}
		</Styled.Picture>
	);
};

export default Picture;
