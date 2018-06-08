module.exports = {
  "id": "GtfMi9",
  "title": "Event Registration",
  "theme": {
    "href": "https://api.typeform.com/themes/JPnxbU"
  },
  "workspace": {
    "href": "https://api.typeform.com/workspaces/12350484"
  },
  "settings": {
    "is_public": true,
    "is_trial": false,
    "language": "en",
    "progress_bar": "proportion",
    "show_progress_bar": true,
    "show_typeform_branding": true,
    "meta": {
      "allow_indexing": true
    }
  },
  "welcome_screens": [
    {
      "ref": "70d54ea2e68f27ae",
      "title": "The annual FormConf is finally here!",
      "properties": {
        "show_button": true,
        "button_text": "Start"
      },
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/krhQXapichpH"
      }
    }
  ],
  "thankyou_screens": [
    {
      "ref": "default_tys",
      "title": "Thanks for completing this typeform\nNow *create your own* — it's free, easy, & beautiful",
      "properties": {
        "show_button": true,
        "share_icons": false,
        "button_mode": "redirect",
        "button_text": "Create a *typeform*",
        "redirect_url": "https://admin.typeform.com/signup?utm_campaign=GtfMi9&utm_source=typeform.com-12156441-Basic&utm_medium=typeform&utm_content=typeform-thankyoubutton&utm_term=EN"
      },
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/2dpnUBBkz2VN"
      }
    }
  ],
  "fields": [
    {
      "id": "ccSRxhfKXQbS",
      "title": "What's your name?",
      "ref": "4b1e1e426d0a32fa",
      "validations": {
        "required": true
      },
      "type": "short_text"
    },
    {
      "id": "aSq94QQkXhqa",
      "title": "How did you hear about the FormConf?",
      "ref": "ef965333c8f24748",
      "properties": {
        "randomize": false,
        "allow_multiple_selection": false,
        "allow_other_choice": true,
        "vertical_alignment": false,
        "choices": [
          {
            "id": "Xy31nvlyfjUe",
            "ref": "51c76f5fa66c6725",
            "label": "Social media"
          },
          {
            "id": "uVAFXuTRD2tq",
            "ref": "87408191d53179ee",
            "label": "Found your website on Google"
          },
          {
            "id": "Kutu0Qesg8t1",
            "ref": "8bc14882d0521d6a",
            "label": "Local outdoor advertising"
          }
        ]
      },
      "validations": {
        "required": false
      },
      "type": "multiple_choice"
    },
    {
      "id": "YiMopD05Pv1O",
      "title": "{{field:4b1e1e426d0a32fa}}, what's your email address?",
      "ref": "ea039d563cefd7cc",
      "validations": {
        "required": false
      },
      "type": "email"
    },
    {
      "id": "wip3SXIw2fs3",
      "title": "Will you be staying for the afterparty?",
      "ref": "6ab2589564fa989e",
      "properties": {
        "description": "We have a surprise for you!",
        "randomize": false,
        "allow_multiple_selection": false,
        "allow_other_choice": false,
        "supersized": false,
        "show_labels": true,
        "choices": [
          {
            "id": "OkZoXhsvVJta",
            "ref": "bfcc3fbf608583f7",
            "label": "Yes",
            "attachment": {
              "type": "image",
              "href": "https://images.typeform.com/images/K8wXQ7djjcpc"
            }
          },
          {
            "id": "a6CtT0mfgJNz",
            "ref": "5bf390ce5210d38b",
            "label": "No",
            "attachment": {
              "type": "image",
              "href": "https://images.typeform.com/images/bGf8wfNY2HPR"
            }
          }
        ]
      },
      "validations": {
        "required": false
      },
      "type": "picture_choice"
    },
    {
      "id": "RIumS7PlPwzU",
      "title": "Do you have any comments or suggestions for the event?",
      "ref": "0211cbae4712bed4",
      "validations": {
        "required": false
      },
      "type": "long_text"
    }
  ],
  "_links": {
    "display": "https://isabellachen.typeform.com/to/GtfMi9"
  }
}