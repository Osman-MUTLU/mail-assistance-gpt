
import nltk
from nltk.corpus import stopwords
from datetime import *

class Assets:
    def __init__(self) -> None:
        nltk.download('stopwords')
        self.stop_words = set(stopwords.words('english'))
    def get_stopwords(self):
        return self.stop_words
