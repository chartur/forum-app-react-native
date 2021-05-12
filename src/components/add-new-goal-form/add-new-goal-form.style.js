import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        paddingHorizontal: 15,
        flex: 1
    },
    form: {
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%'
    },
    cancelContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end'
    }
})

export default styles;