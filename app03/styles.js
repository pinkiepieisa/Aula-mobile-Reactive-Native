import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdc5e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { 
    padding: 20,
    width: 300,
    height: 210,
    marginBottom: 20, 
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  historico: {
    padding: 10,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#722ba1'
  },
  input: {
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5, 
    backgroundColor: '#fff',
  },
  buttonContainer: { 
    width: '18%', 
  },
  button: { 
    backgroundColor: '#92ccee', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonDel: {
    backgroundColor: '#bd1b1b', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center',
    marginVertical: 10,
    width: 100
  },
  buttonText: {
    color: '#fdfdfd', 
    fontWeight: 'bold', 
  }, 
  resultado: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333',
    textAlign: 'center'
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  noListText: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    fontStyle: 'italic'
  }
});

export default styles;
