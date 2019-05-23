from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class Keywords(FlaskForm):
    keywords = StringField('keyword')
    submit = SubmitField('Submit')
    

