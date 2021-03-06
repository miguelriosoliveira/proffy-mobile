import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import landingImg from '../../assets/images/landing.png';

import styles from './styles';

const Landing: React.FC = () => {
	const navigator = useNavigation();

	function navigateTo(pageName: string) {
		return () => navigator.navigate(pageName);
	}

	return (
		<View style={styles.container}>
			<Image source={landingImg} style={styles.banner} />

			<Text style={styles.title}>
				Seja bem-vindo,
				{'\n'}
				<Text style={styles.titleBold}>O que deseja fazer?</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<RectButton onPress={navigateTo('Study')} style={[styles.button, styles.buttonPrimary]}>
					<Image source={studyIcon} />
					<Text style={styles.buttonText}>Estudar</Text>
				</RectButton>

				<RectButton
					onPress={navigateTo('GiveClasses')}
					style={[styles.button, styles.buttonSecondary]}
				>
					<Image source={giveClassesIcon} />
					<Text style={styles.buttonText}>Dar Aulas</Text>
				</RectButton>
			</View>

			<Text style={styles.totalConnections}>
				{/* eslint-disable-next-line react/jsx-one-expression-per-line */}
				Total de 285 conexões já realizadas <Image source={heartIcon} />
			</Text>
		</View>
	);
};

export default Landing;
