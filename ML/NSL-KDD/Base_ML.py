import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import precision_score

columns = ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land', 'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in', 'num_compromised', 'root_shell', 'su_attempted', 'num_root', 'num_file_creations', 'num_shells', 'num_access_files', 'num_outbound_cmds', 'is_host_login', 'is_guest_login', 'count', 'srv_count', 'serror_rate', 'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate', 'attack_type', 'attack_class']

df = pd.read_csv('KDDTrain+.txt',)
df.columns = columns

# Separate the target variable
Y = df['attack_type']
X = df.drop(['attack_type', 'attack_class'], axis=1)

# Apply Label Encoding to categorical columns
categorical_columns = ['flag', 'protocol_type', 'service']
label_encoders = {}
for col in categorical_columns:
    label_encoders[col] = LabelEncoder()
    X[col] = label_encoders[col].fit_transform(X[col])

# Load the trained classifier
clf = RandomForestClassifier()
clf.fit(X, Y)

new_entry = pd.DataFrame({
    'duration': [0],
    'protocol_type': ['tcp'],
    'service': ['telnet'],
    'flag': ['RSTO'],
    'src_bytes': [0],
    'dst_bytes': [0],
    'land': [0],
    'wrong_fragment': [0],
    'urgent': [0],
    'hot': [0],
    'num_failed_logins': [0],
    'logged_in': [0],
    'num_compromised': [0],
    'root_shell': [0],
    'su_attempted': [0],
    'num_root': [0],
    'num_file_creations': [0],
    'num_shells': [0],
    'num_access_files': [0],
    'num_outbound_cmds': [0],
    'is_host_login': [0],
    'is_guest_login': [0],
    'count': [0],
    'srv_count': [0],
    'serror_rate': [1.0],
    'srv_serror_rate': [1.0],
    'rerror_rate': [0.0],
    'srv_rerror_rate': [0.0],
    'same_srv_rate': [0.0],
    'diff_srv_rate': [0.0],
    'srv_diff_host_rate': [0.0],
    'dst_host_count': [255],
    'dst_host_srv_count': [1],
    'dst_host_same_srv_rate': [0.0],
    'dst_host_diff_srv_rate': [0.0],
    'dst_host_same_src_port_rate': [0.0],
    'dst_host_srv_diff_host_rate': [0.0],
    'dst_host_serror_rate': [0.0],
    'dst_host_srv_serror_rate': [0.0],
    'dst_host_rerror_rate': [1.0],
    'dst_host_srv_rerror_rate': [1.0],
})

# Apply Label Encoding to new_entry categorical columns using the same label encoders
for col in categorical_columns:
    new_entry[col] = label_encoders[col].transform(new_entry[col])

# Classify the new entry
prediction = clf.predict(new_entry)

# Print the prediction
print('Prediction:', prediction)