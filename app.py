import os

import pandas as pd
import numpy as np

from pytrends.request import TrendReq

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def index():
    # Login to Google. Only need to run this once, the rest of requests will use the same session.
    pytrend = TrendReq()

    """Return the homepage."""
    return render_template("index.html")


@app.route("/interest_over_time/<keywords>")
def interest_over_time(keywords):
   # Create payload and capture API tokens. Only needed for interest_over_time(), interest_by_region() & related_queries()
    pytrend.build_payload(kw_list=keywords)

    # Interest Over Time
    interest_over_time_df = pytrend.interest_over_time()

    # Format the data to send as json
    interest_over_time = interest_over_time_df.to_json()
    return jsonify(interest_over_time)


if __name__ == "__main__":
    app.run()


