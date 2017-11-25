import serial, time, datetime
import psycopg2
#import MySQLdb

hostname = 'localhost'
username = 'postgres'
#username = 'root'
password = 'Impenetravel3000'
#password = ''
database = 'BD'


#gerando a hora atual no formato TIMESTAMP

myConnection = psycopg2.connect( host=hostname, user=username, password=password, dbname=database )
#myConnection = MySQLdb.connect( host=hostname, user=username, password=password, dbname=database )


cur = myConnection.cursor()
#cur.execute( "SELECT nome, horario_entrada FROM bd_projeto.usuarios_entrada ORDER BY horario_entrada")
cur.execute( "SELECT horario_entrada FROM usuarios_entrada ORDER BY horario_entrada")


for horario_entrada in cur.fetchall() :
    print horario_entrada

## inserindo os dados na Table
cur = myConnection.cursor()

s = serial.Serial(port='COM3', baudrate=9600) #/dev/ttyACM0
s.write("100\n")

time.sleep(1)

while True:
	ts = time.time()
	st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

	leitura = s.readline()

	#data = [leitura, st]
    
	if leitura:
		print "valor "
		print leitura

		consulta_codigos = 'SELECT codigo FROM usuarios'
		cur.execute(consulta_codigos)

		pos = 0
		codigos = []

		for codigo in cur.fetchall():
			codigos.append(codigo)
			pos = pos + 1

		i = 0
		
		passou = 0

		while i < pos:
			cod = str(codigos[i])
			new_cod = cod[2:10] 

			ltr = str(leitura)
			new_ltr = ltr[0:8]

			print str(new_cod) + " " + str(new_ltr)

			if(str(new_cod) == str(new_ltr)):
				consulta_nomes = 'SELECT id_usuario FROM usuarios WHERE codigo = %s'
				cur.execute(consulta_nomes, codigos[i])

				new_pos = 0
				nomes = []

				for nome in cur.fetchall():
					nomes.append(nome)
					print nomes[new_pos]
					new_pos = new_pos + 1

				if nomes[0]:	
					statement = "INSERT INTO usuarios_entrada(horario_entrada, id_usuario) VALUES (%s, %s);"
					cur.execute(statement, (st, nomes[0]))
					myConnection.commit()
					print str(nomes[0]) + " Entrada autorizada!"


				passou = passou + 1

			i = i + 1

	s.write("Aguardando leitura do cartao\n")
	time.sleep(1)
    
myConnection.close()














